import multer, { FileFilterCallback, Multer, Options as MulterOptions } from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import uniqid from 'uniqid';
import { Express, Request } from 'express';
import AppError from '@shared/errors/AppError';

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? ''
  }
});

const multerConfig: MulterOptions =  {
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME ?? '',
    metadata: (req, file, next) => {
      next(null, {fieldName: file.fieldname});
    },
    key: (req, file, next) => {
      next(null, uniqid() + file.filename)
    }
  }),
};

const imageFileFilter = (req: Request, file: Express.Multer.File, next: FileFilterCallback) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    next(null, true)
  } else {
      next(new AppError('Only jpeg and png are allowed'));
  }
};

const getMulterConfig = (config: string): MulterOptions => {
  switch (config) {
    case 'image':
      multerConfig.fileFilter = imageFileFilter;
      return multerConfig;
    
    default:
      return multerConfig;
  }
};

export default getMulterConfig;

declare const _default: (() => {
    driver: string;
    accessKeyId: string;
    secretAccessKey: string;
    awsDefaultS3Bucket: string;
    awsDefaultS3Url: string;
    awsS3Region: string;
    maxFileSize: number;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    driver: string;
    accessKeyId: string;
    secretAccessKey: string;
    awsDefaultS3Bucket: string;
    awsDefaultS3Url: string;
    awsS3Region: string;
    maxFileSize: number;
}>;
export default _default;

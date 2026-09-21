variable "aws_region" {
  type        = string
  description = "AWS EC2 Region"
}


variable "iam_user" {
  type        = string
  description = "AWS IAM User"
}


variable "iam_purpose" {
  type        = string
  description = "AWS EC2 Purpose"
}


variable "aws_s3_bucket_name" {
  type        = string
  description = "AWS S3 Bucket Name"
}


variable "s3_purpose" {
  type        = string
  description = "AWS S3 Purpose"
}


variable "s3_environment" {
  type        = string
  description = "AWS S3 Environment"
}


variable "aws_s3_versioning_enabled" {
  type        = bool
  description = "AWS S3 Version Enabled"
}


variable "aws_region" {
  type        = string
  description = "AWS EC2 Region"
}

variable "aws_ami_id" {
  type        = string
  description = "AWS EC2 AMI ID"
}

variable "instance_type" {
  type        = string
  description = "AWS EC2 Instance Type"
}

variable "ec2_monitoring" {
  type        = string
  description = "AWS EC2 Monitoring Enabled"
}

variable "instance_name" {
  type        = string
  description = "AWS EC2 Instance Name"
}


variable "ec2_environment" {
  type        = string
  description = "AWS EC2 Environment"
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


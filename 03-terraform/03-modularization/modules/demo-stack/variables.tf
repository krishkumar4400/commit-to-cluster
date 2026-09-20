variable "aws_ami_id" {
  type        = string
  description = "EC2 Instance AMI"
}

variable "instance_type" {
  type        = string
  description = "EC2 Instance Type"

}

variable "ec2_monitoring" {
  type        = bool
  description = "EC2 Instance Monitoring Enabled"

}

variable "instance_name" {
  type        = string
  description = "EC2 Instance Name"

}
variable "ec2_environment" {
  type        = string
  description = "EC2 Instance Environment"

}

variable "iam_user" {
  type        = string
  description = "IAM Username"

}

variable "iam_purpose" {
  type        = string
  description = "IAM Purpose"

}

variable "aws_s3_bucket_name" {
  type        = string
  description = "AWS S3 Bucket Name"

}

variable "s3_purpose" {
  type        = string
  description = "AWS S3 Bucket Purpose"

}

variable "s3_environment" {
  type        = string
  description = "AWS S3 Bucket Environment"

}

variable "aws_s3_versioning_enabled" {
  type        = bool
  description = "AWS S3 Bucket Versioning Enabled"

}

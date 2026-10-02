variable "iam_username" {
  type        = string
  description = "AWS IAM Username"
}
variable "environment" {
  type = string
}
variable "ec2_ami" {
  type        = string
  description = "EC2 Instance AMI"
}
variable "ec2_instance_type" {
  type        = string
  description = "EC2 Instance Type"
}
variable "aws_s3_bucket_name" {
  type        = string
  description = "AWS S3 Bucket Name"
}
variable "aws_s3_bucket_versioning" {
  type        = bool
  description = "AWS S3 versioning Enabled"
  default = false
}

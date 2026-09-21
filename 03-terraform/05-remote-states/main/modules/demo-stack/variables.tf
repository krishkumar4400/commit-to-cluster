
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
  default = false
}

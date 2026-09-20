variable "instance_type" {
  description = "Type of EC2 Instance"
  type        = string
  default     = "t3.micro"
}

variable "enable_monitoring" {
  description = "Is Monitoring Enabled or not"
  type        = bool
  default     = false
}

variable "instance_name" {
  description = "EC2 Instance Name"
  type        = string
  default     = "aws_demo_ec2_instance"
}

variable "iam_user" {
  type    = string
  default = "ec2_user"
}

variable "s3_bucket_name" {
  type    = string
  default = "s3_bckt_test_4400"
}

# ----------------------
# Terraform block
# ----------------------
# This block tells Terraform:
# 1. Which provider are required
# 2. where to download them from
# 3. which version to use

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

# ----------------------
# Provider configuration
# ----------------------
# This tells Terraform:
# - which cloud to talk to (AWS)
# - which region to create resources in

provider "aws" {
  # Configure the AWS Provider
  region = "ap-south-1"
}

# ----------------------
# Resource block
# ----------------------
# This block defines an AWS EC2 instance

# resource "aws_instance" "demo-ec2" {
#   ami           = "ami-01a00762f46d584a1"
#   instance_type = "t3.micro"

#   tags = {
#     Name = "terraform-demo"
#   }
# }

# This block defines an AWS VPC
# # Create a VPC
# resource "aws_vpc" "example" {
#   cidr_block = "10.0.0.0/16"
# }

# This block defines an AWS IAM User
# resource "aws_iam_user" "demo_user" {
#   name = "ec2-user"

#   tags = {
#     Purpose = "terraform-demo"
#   }
# }

# This block defines an AWS S3
# resource "aws_s3_bucket" "demo-s3-bucket" {
#   bucket = "my-demo-s3-bckt-4400"

#   tags = {
#     Name        = "My bucket"
#     Environment = "Dev"
#     Purpose     = "terraform-demo"
#   }
# }

# resource "aws_s3_bucket" "demo-s3-bucket1" {
#   bucket = "my-demo-s3-bckt-44001"

#   tags = {
#     Name        = "My bucket1"
#     Environment = "Dev1"
#     Purpose     = "terraform-demo1"
#   }
# }

# resource "aws_s3_bucket_versioning" "versioning_demo" {
#   bucket = aws_s3_bucket.demo-s3-bucket1.id
#   versioning_configuration {
#     status = "Enabled"
#   }
# }

### Variables in Terraform

variable "instance_type" {
  type        = string
  description = "EC2 Instance Type"
  default     = "t3.micro"
}

variable "instance_name" {
  type        = string
  description = "EC2 Instance Name"
  default     = "demo-instance"
}

variable "enable_monitoring" {
  type        = bool
  description = "EC2 Instance Enable Monitoring"
  default     = false
}

resource "aws_instance" "demo-ec2-1" {
  ami = "ami-01a00762f46d584a1"
  # instance_type = "t3.micro"
  instance_type = var.instance_type
  monitoring    = var.enable_monitoring

  tags = {
    # Name = "terraform-demo-1"
    Name = var.instance_name
  }
}

# Output in Terraform
output "ec2_public_ip" {
  description = "This is the Public IP Address of EC2 Instance"
  value       = aws_instance.demo-ec2-1.public_ip
  # sensitive = true
}

output "ec2_ami" {
  value = aws_instance.demo-ec2-1.ami
}

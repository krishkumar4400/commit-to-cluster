
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  # Configure the AWS Provider
  region = "ap-south-1"
}

# This block defines an AWS S3
resource "aws_s3_bucket" "demo-s3-bucket" {
  bucket = "my-demo-s3-bckt-4400"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
    Purpose     = "terraform-demo"
  }
}

resource "aws_s3_bucket" "demo-s3-bucket1" {
  bucket = "my-demo-s3-bckt-44001"

  tags = {
    Name        = "My bucket1"
    Environment = "Dev1"
    Purpose     = "terraform-demo1"
  }
}


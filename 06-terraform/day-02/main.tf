terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.41.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  # Configuration options
  region = "ap-south-1"
}

# random resource for unique bucket name
resource "random_id" "bucket_id" {
  byte_length = 4
}

# create S3 Bucket
resource "aws_s3_bucket" "first_bucket" {
  bucket = "my-bucket-${random_id.bucket_id.hex}"

  tags = {
    Name        = "My bucket 2.0"
    Environment = "Testing"
  }
}

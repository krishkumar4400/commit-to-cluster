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

resource "aws_instance" "demo-ec2" {
  ami           = "ami-01a00762f46d584a1"
  instance_type = "t3.micro"

  tags = {
    Name = "terraform-demo"
  }
}

# # Create a VPC
# resource "aws_vpc" "example" {
#   cidr_block = "10.0.0.0/16"
# }


# Create IAM User
resource "aws_iam_user" "demo-user" {
  name = var.iam_username
  tags = {
    Environment = var.environment
  }
}

# Create a EC2 instance
resource "aws_instance" "demo-server" {
  ami           = var.ec2_ami
  instance_type = var.ec2_instance_type

  tags = {
    Environment = var.environment
  }
}

# Create a S3 bucket
resource "aws_s3_bucket" "demo-bucket" {
  bucket = var.aws_s3_bucket_name

  tags = {
    Environment = var.environment
  }
}

resource "aws_s3_bucket_versioning" "demo-bucket-versioning" {
  count = var.aws_s3_bucket_versioning ? 1 : 0
  bucket = aws_s3_bucket.demo-bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}


# resources

resource "aws_instance" "demo_ec2" {
  ami           = var.aws_ami_id
  instance_type = var.instance_type
  monitoring    = var.ec2_monitoring

  tags = {
    Name        = var.instance_name
    Environment = var.ec2_environment
    Owner       = "Terraform"
  }
}

resource "aws_iam_user" "demo_user" {
  name = var.iam_user

  tags = {
    Purpose = var.iam_purpose
  }
}

resource "aws_s3_bucket" "demo_bucket" {
  bucket = var.aws_s3_bucket_name

  tags = {
    Purpose     = var.s3_purpose
    Environment = var.s3_environment
  }
}

resource "aws_s3_bucket_versioning" "demo_bucket_versioning" {
  count  = var.aws_s3_versioning_enabled ? 1 : 0
  bucket = aws_s3_bucket.demo_bucket.id

  versioning_configuration {
    status = var.aws_s3_versioning_enabled
  }
}

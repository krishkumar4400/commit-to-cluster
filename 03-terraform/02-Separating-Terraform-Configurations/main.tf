resource "aws_instance" "demo-ec2-instance" {
  ami           = "ami-0b6d9d3d33ba97d99"
  instance_type = var.instance_type
  monitoring    = var.enable_monitoring

  tags = {
    Name = var.instance_name
  }
}

resource "aws_iam_user" "ec2_user_tf" {
  name = var.iam_user

  tags = {
    Purpose = "terraform-demo"
  }
}

resource "aws_s3_bucket" "s3_bucket_tf" {
  bucket = var.s3_bucket_name

  tags = {
    Name        = "My bucket"
    Environment = "Prod"
    Purpose     = "terraform-demo"
  }
}

resource "aws_s3_bucket_versioning" "s3_bckt_versioning" {
  bucket = aws_s3_bucket.s3_bucket_tf.id
  versioning_configuration {
    status = "Enabled"
  }
}

module "demo-stack" {
  source = "../../modules/demo-stack"

  iam_username             = var.iam_username
  environment              = var.environment
  ec2_ami                  = var.ec2_ami
  ec2_instance_type        = var.ec2_instance_type
  aws_s3_bucket_name       = var.aws_s3_bucket_name
  aws_s3_bucket_versioning = var.aws_s3_bucket_versioning
}

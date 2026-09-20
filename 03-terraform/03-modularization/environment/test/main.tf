module "demo-stack" {
  source = "../../modules/demo-stack"

  aws_ami_id                = var.aws_ami_id
  instance_type             = var.instance_type
  ec2_monitoring            = var.ec2_monitoring
  instance_name             = var.instance_name
  ec2_environment           = var.ec2_environment
  iam_user                  = var.iam_user
  iam_purpose               = var.iam_purpose
  aws_s3_bucket_name        = var.aws_s3_bucket_name
  s3_purpose                = var.s3_purpose
  s3_environment            = var.s3_environment
  aws_s3_versioning_enabled = var.aws_s3_versioning_enabled
}

module "demo-stack" {
  source                    = "../../modules/demo-stack"
  iam_user                  = var.iam_user
  iam_purpose               = var.iam_purpose
  aws_s3_bucket_name        = var.aws_s3_bucket_name
  s3_purpose                = var.s3_purpose
  s3_environment            = var.s3_environment
  aws_s3_versioning_enabled = var.aws_s3_versioning_enabled
}

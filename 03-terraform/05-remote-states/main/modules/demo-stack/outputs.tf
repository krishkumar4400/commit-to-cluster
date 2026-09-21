

output "s3_bucket_name" {
  description = "Name of the S3 Bucket"
  value       = aws_s3_bucket.demo_bucket.bucket
}

output "iam_user_id" {
  value       = aws_iam_user.demo_user.id
  description = "AWS IAM User Id"
}

output "iam_user" {
  value       = aws_iam_user.demo_user.name
  description = "AWS IAM Username"
}

output "iam_user_arn" {
  value       = aws_iam_user.demo_user.arn
  description = "AWS IAM ARN"
}


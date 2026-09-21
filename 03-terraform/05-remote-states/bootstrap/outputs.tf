output "AWS_S3_Region" {
  value       = aws_s3_bucket.terraform_state.region
  description = "AWS S3 Region"
}

output "AWS_DynamoDB_Region" {
  value       = aws_dynamodb_table.terraform_locks.region
  description = "DynamoDB DynamoDb Region"
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.terraform_state.arn
}

output "s3_bucket_name" {
  value = aws_s3_bucket.terraform_state.bucket
}

output "s3_bucket_id" {
  value = aws_s3_bucket.terraform_state.id
}

output "dynamo_db_table_arn" {
  value = aws_dynamodb_table.terraform_locks.arn
}

output "dynamo_db_table_name" {
  value = aws_dynamodb_table.terraform_locks.name
}

output "dynamo_db_table_id" {
  value = aws_dynamodb_table.terraform_locks.id
}

output "ec2_public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.demo_ec2.public_ip
}

output "ec2_instance_id" {
  description = "EC2 Instance ID"
  value       = aws_instance.demo_ec2.id
}

output "se_bucket_name" {
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

output "ec2_private_ip" {
  value       = aws_instance.demo_ec2.private_ip
  description = "Private IP of the EC2 Instance"
}

output "ec2_instance_arn" {
  value       = aws_instance.demo_ec2.arn
  description = "AWS EC2 Instance ARN"
}

output "iam_user_arn" {
  value       = aws_instance.demo_ec2.arn
  description = "AWS IAM User ARN"
}


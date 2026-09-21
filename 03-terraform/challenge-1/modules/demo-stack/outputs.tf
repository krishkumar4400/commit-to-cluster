output "iam_username" {
  value       = aws_iam_user.demo-user.name
  description = "IAM Username"
}
output "iam_arn" {
  value       = aws_iam_user.demo-user.arn
  description = "IAM ARN"
}
output "ec2_instance_id" {
  value       = aws_instance.demo-server.id
  description = "AWS EC2 Instance ID"
}
output "ec2_arn" {
  value       = aws_instance.demo-server.arn
  description = "AWS EC2 ARN"
}
output "ec2_public_ip" {
  value       = aws_instance.demo-server.public_ip
  description = "AWS EC2 Public IP"
}
output "ec2_private_ip" {
  value       = aws_instance.demo-server.private_ip
  description = "AWS EC2 Private IP"
}
output "aws_s3_id" {
  value = aws_s3_bucket.demo-bucket.id
}
output "aws_s3_name" {
  value = aws_s3_bucket.demo-bucket.bucket
}
output "aws_s3_region" {
  value = aws_s3_bucket.demo-bucket.region
}

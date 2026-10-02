output "iam_username" {
  value       = module.demo-stack.iam_username
  description = "IAM Username"
}
output "iam_arn" {
  value       = module.demo-stack.iam_arn
  description = "IAM ARN"
}
output "ec2_instance_id" {
  value       = module.demo-stack.ec2_instance_id
  description = "AWS EC2 Instance ID"
}
output "ec2_arn" {
  value       = module.demo-stack.ec2_arn
  description = "AWS EC2 ARN"
}
output "ec2_public_ip" {
  value       = module.demo-stack.ec2_public_ip
  description = "AWS EC2 Public IP"
}
output "ec2_private_ip" {
  value       = module.demo-stack.ec2_private_ip
  description = "AWS EC2 Private IP"
}
output "aws_s3_id" {
  value = module.demo-stack.aws_s3_id
}
output "aws_s3_name" {
  value = module.demo-stack.aws_s3_name
}
output "aws_s3_region" {
  value = module.demo-stack.aws_s3_region
}

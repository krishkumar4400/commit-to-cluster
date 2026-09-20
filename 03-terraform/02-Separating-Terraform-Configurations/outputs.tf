output "ec2_public_ip" {
  description = "Public IP of the EC2 Instance"
  value       = aws_instance.demo-ec2-instance.public_ip
}

output "ec2_ami" {
  value = aws_instance.demo-ec2-instance.ami
}

output "ec2_instance_type" {
  value = aws_instance.demo-ec2-instance.instance_type
}

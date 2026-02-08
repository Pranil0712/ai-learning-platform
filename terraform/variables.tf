variable "ami_id" {
  type    = string
  default = "ami-03f487875bd4384ee"
}

variable "instance_type" {
  type    = string
  default = "t2.medium"
}

variable "key_name" {
  type    = string
  # Leave default out so you are forced to remember which key you downloaded
}
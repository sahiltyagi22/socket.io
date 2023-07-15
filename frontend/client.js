const socket = io("hrrp://localhost:8000")

const form = document.getElementById('send-container')
const sendInput = document.getElementById('messageIPs')
const messageBox = document.querySelector('.container')
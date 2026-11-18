@echo off
echo Starting MCIOT Lab Local Portal Server...
cd /d "%~dp0"
start "" http://localhost:8000
python -m http.server 8000
pause


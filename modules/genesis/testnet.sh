cd /home/rails/.config/Electron/binaries/XDC/unpacked

./XDC init /home/rails/shubham/work/deliverables/Node-Setup/modules/genesis/testnet.json

echo "\n" > password.txt

./XDC account new --password ./password.txt

# Virtualization of OS

<aside>
💡 virtualization of OS: use of SW to build a virtual layer over the HW so that the sys-HW work more effectively

</aside>

[hyper-V](Virtualization%20of%20OS%20f888b96e45054dd1a58a4f49722d2e46/hyper-V%201598c35c40f24f6699a18d940b1423d1.md)

[WSL2](Virtualization%20of%20OS%20f888b96e45054dd1a58a4f49722d2e46/WSL2%20113c112c3ae34eb5b972a4d38675ce85.md)

[WSL](Virtualization%20of%20OS%20f888b96e45054dd1a58a4f49722d2e46/WSL%2073e98541a8164b22b6935621d9a5ce1e.md)

[virtual box](Virtualization%20of%20OS%20f888b96e45054dd1a58a4f49722d2e46/virtual%20box%20e5f0deffc9334d25b0eef1d8a7c57463.md)

Host-OS: physical
Guest-OS: virtual

Container-like virtualenv

Docker makes use of kernel of host-OS and pretend if there were physical OS

1. 環境が原因のエラーが消える。
2. OSの指定・ミドルウェアのインストール環境設定がコード化されているので、再利用・バージョン管理・配布が用意。Docker file(light) Infrastructure as Code
3. AWS GCB Azue kubernetesを使うとより便利
4. Docker Hubで公開されたイメージを利用する
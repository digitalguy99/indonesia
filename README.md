# Situs Lab Maigo (bhs:ID) ver1.0
Cara Mengedit Situs Web `Bahasa Indonesia` Lab Malay-Indonesia(Maigo) SFC

## URL
https://maigo.sfc.keio.ac.jp/indonesia/index.html

## Persyaratan 
* Memiliki izin `write` pada direktori `/pub/WWW/maigo/`
  * Buat permohonan kepada Nonaka-sensei untuk mendaftarkan email CNS ke ITC
  * Hubungi Nonaka-sensei untuk informasi lebih lanjut
* Memiliki akun `github`
* Bisa menggunakan HTML, CSS & Javascript
* Bisa menggunakan `git` dan antarmuka baris perintah(CLI)

## Mengakses _file_
### Langsung dari _desktop_
``` 
git clone https://github.com/digitalguy99/indonesia
```
### Melalui `ssh`
```
cd /pub/WWW/maigo/indonesia
```

## Meng-update Situs
```diff 
- ----------------------PENTING--------------------------- -
```
* Jangan lupa untuk selalu melakukan `git pull origin master` setiap kali sebelum memulai sesi penyuntingan
* Jangan lupa untuk selalu melakukan `git push origin master` setiap kali sesudah mengakhiri sesi penyuntingan 
* Untuk menerbitkan konten pada situs web, bukalah direktori `/pub/WWW/maigo/indonesia` dan lakukan `git pull origin master`
```diff 
- ----------------------PENTING--------------------------- -
```
### Berbagai model pembaruan website
* Pengeditan langsung dengan penyunting teks CLI
![diagram1](https://drive.google.com/uc?id=1-iODw0AfakTyWbHeLN7DzQW32Mda3KOQ)

* Pengeditan dari _desktop_ lokal 
![diagram2](https://drive.google.com/uc?id=1_mJrtOfVRNwIv-0dpJpOqva2RPwiDDv_)

## Layanan Pihak ke-3
Situs web ini memakai beberapa layanan pihak ke-3. Daftar layanan-layanan tersebut bisa dilihat dibawah:
* **zapier** - untuk memperbarui umpan web(_feed_) RSS
  * URL: https://zapier.com/
  * User/Pass: [memakai akun Google Maigo SFC]
  * Bahan yang dipakai:
    * https://docs.google.com/spreadsheets/d/1td0EGQD-JdCzP5zMDn5FYQA_AIbdFb3MTKJYhk5gB6s/edit?usp=sharing
      * Cara pakai: 
        * Dengan menambahkan informasi pada baris baru, _feed_ RSS pada situs web akan diperbarui dengan otomatis
        * `***!PENTING***` Jangan menghapus data yang sudah ada pada baris-baris sebelumnya 
* **automate.io** - untuk menyambungkan formulir kontak dengan akun Twitter Maigo
  * URL: https://automate.io/
  * User/Pass: [memakai akun Google Maigo SFC]
  * Bahan yang dipakai: 
    * https://docs.google.com/forms/d/1bYpZ47b-wiW-7p1FMiGucwaS5KXAKa5bbOiE94_r-dU/edit?usp=sharing
      * Cara pakai:
        * Untuk melihat respons langsung dari formulir kontak, buka bagian _Responses_ dan tekan label _Individual_
    * https://docs.google.com/spreadsheets/d/1GXALk0uUTkaXSbE6Vsgj2Not6JC7Mu9jHJBI6neh39s/edit?usp=sharing
      * `***!PENTING***` Jangan mengedit data yang ada pada berkas ini
* **FreeVisitorCounters.com** - untuk mengitung jumlah pengunjung
  * URL: https://www.freevisitorcounters.com/
* **Google Programmable Search Engine** - untuk membuat mesin pencarian 
  * URL: https://programmablesearchengine.google.com/cse/all
    

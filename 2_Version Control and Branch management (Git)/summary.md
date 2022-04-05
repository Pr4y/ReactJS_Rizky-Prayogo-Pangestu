#  (1) Versioning Control and Branch management (Git)

## Resume Materi Git

### 1. Version Control System
Version Control System digunakan untuk mengelolah perubahan yang terjadi pada source code. Version control system mempermudah kita dalam berkolaborasi membangun sebuah aplikasi karena kita bisa mengetahui kapan perubahan itu terjadi dan siapa yang melakukan perubahan tersebut. Sehingga kita mudah melakukan tracking pada saat kerjasama team. Pada dasarnya terdapat banyak Version control system, seperti subversion, cvs, mercurial, dll.

### 2. Workflow Collaboration (Alur kerja kolaborasi
Dalam mengembangkan sebuah software baik secara individu maupun kolaborasi dalam sebuah tim, ada baiknya kita perlu memahami alur kerja untuk berkolaborasi dalam github, sehingga pengembangan software menjadi lebih efisien.

#### Notes :
- Jangan melakukan perubahan source code pada branch master, Hal ini karena branch master merupakan branch utama yang digunakan saat sesi production. Hal yang dapat dilakukan adalah dengan membuat branch development, branch development ini merupakan branch khusus yang digunakan saat proses pengembangan software.
- Hindari melakukan perubahan atau penambahan fitur langsung pada branch development. Hal yang sebaiknya dilakukan adalah dengan membuat branch baru untuk setiap fitur yang ingin ditambahkan. Pada saat fitur tersebut sudah fix, kemudian lakukan merge ke branch development.

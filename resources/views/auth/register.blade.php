<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Register</title>

    <!-- Custom fonts for this template-->
    <link href="{{url('public/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="{{url('public/css/sb-admin-2.min.css')}}" rel="stylesheet">

</head>

<body class="bg-gradient-primary">

    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Daftar!</h1>
                            </div>
                            <form class="user" method="POST" action="{{ route('register') }}">
                              @csrf
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                      <input type="text" name="name" value="{{old('name')}}" class="form-control form-control-user" id="name" placeholder="Nama Lengkap" required autofocus autocomplete="name">
                                    </div>
                                    <div class="col-sm-6">
                                      <input type="text" name="username" value="{{old('username')}}" class="form-control form-control-user" id="username" placeholder="Username" required autocomplete="username">
                                    </div>
                                </div>
                                <div class="form-group">
                                  <input type="email" name="email" value="{{old('email')}}" class="form-control form-control-user" id="email" placeholder="Email" required autocomplete="email">
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                      <input type="password" name="password" value="" class="form-control form-control-user" id="password" placeholder="Kata Sandi" required>
                                    </div>
                                    <div class="col-sm-6">
                                      <input type="password_confirmation" name="password_confirmation" value="" class="form-control form-control-user" id="password_confirmation" placeholder="Ulangi Kata Sandi" required>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-user btn-block"> Daftar Akun Baru </button>
                                <hr>
                                <a href="#" class="btn btn-google btn-user btn-block"> <i class="fab fa-google fa-fw"></i> Register with Google </a>
                                <a href="#" class="btn btn-facebook btn-user btn-block"> <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook </a>
                            </form>
                            <hr>
                            <div class="text-center">
                                <a class="small" href="{{url('login')}}">Sudah Punya Akun? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="{{url('public/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{url('public/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{url('public/vendor/jquery-easing/jquery.easing.min.js')}}"></script>

    <!-- Custom scripts for all pages-->
    <script src="{{url('public/js/sb-admin-2.min.js')}}"></script>

</body>

</html>

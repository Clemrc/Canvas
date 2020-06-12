const app = new Vue({
   el: '#main',
   data: {
      test: "clement",
      canvas: null,
      ctx: null,
      mouse: {
         x: null,
         y: null
      },
      // maxRadius: 40,
      // minRadius: 2,
      // colorArray: [
      //    'red',
      //    'blue',
      //    'yellow',
      //    'black',
      //    'purple'
      // ],
      // circle: {
      //    x: null,
      //    y: null,
      //    dx: null,
      //    dy: null,
      //    radius: null,
      // },
      // color: null,
      // circleArray: []
   },
   mounted() {
      var vm = this
      vm.canvas = document.querySelector('canvas')
      vm.canvas.width = window.innerWidth
      vm.canvas.height = window.innerHeight
      vm.ctx = vm.canvas.getContext('2d')

      // for (var i = 0; i < 100; i++) {
      //    this.radius = Math.random() * (10 - 2) + 2;
      //    this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
      //    this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
      //    this.dy = (Math.random() - 0.5) * 2;
      //    this.dx = (Math.random() - 0.5) * 2;
      //    console.log(i)
      //    this.circleArray.push(new circle(this.x, this.y, this.dx, this.dy, this.radius));
      // }

      // animate();

   },
   methods: {
      updateCoordinates(event) {
         this.mouse.x = event.clientX;
         this.mouse.y = event.clientY;
         this.circleArray.push(new circle(this.x, this.y, this.dx, this.dy, this.radius))
      },

      circle(x, y, dx, dy, radius) {
         this.x = x;
         this.y = y;
         this.dx = dx;
         this.dy = dy;
         this.radius = radius;
         this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];

         this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = 'purple';
            ctx.fillStyle = this.color;
            ctx.fill();
         }

         this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
               this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
               this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            if (this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50 && this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50) {
               if (this.radius < this.maxRadius) {
                  this.radius += 1;
               }
            } else if (this.radius > this.minRadius) {
               this.radius -= 1;
            }

            draw();
         }
      },
      animate() {
         requestAnimationFrame(animate);
         this.ctx.clearRect(0, 0, innerWidth, innerHeight);
         for (var i = 0; i < this.circleArray.length; i++) {
            this.circleArray[i].update();
         }
      }

   }
})
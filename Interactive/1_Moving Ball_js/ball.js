export class Ball{
    constructor(stageWidth, stageHeight, radius, speed){
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = this.radius + (Math.random() * (stageWidth - diameter)); 
        this.y = this.radius + (Math.random() * (stageHeight - diameter));


    }

    draw(ctx, stageWidth, stageHeight,bloc){
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth,stageHeight,bloc);
        ctx.fillStyle = "#fdd700";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight,bloc){
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        this.bounceBloc(bloc);

        if(this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        }

        if(this.y <= minY || this.y >= maxY){
            this.vy *= -1;
            this.y += this.vy;
        }

    }

    bounceBloc(bloc){
        const minX = bloc.x - this.radius;
        const minY = bloc.y - this.radius;
        const maxX = bloc.maxX + this.radius;
        const maxY = bloc.maxY + this.radius;

        if(this.x > minX && this.x < maxX && this.y > minY && this.y < maxY){
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);
            const min1 = Math.min(x1,x2);
            const min2 = Math.min(y1, y2);
            const min = Math.min(min1,min2);

            if(min == min1){
                this.vx *= -1;
                this.x += this.vx;
            }else if(min == min2){
                this.vy *= -1;
                this.y += this.vy;
            }
        }
    }
}


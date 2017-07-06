/**
 * Created by Karolas on 2017-07-06.
 */
module app{
    interface iCl{
        getThings:()=>boolean;
    }

    class Cl implements iCl{
        getThings: () => {
            return true;
        }

    }
}
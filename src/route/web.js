import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        // Lưu ý: res.render thường dùng để gọi file .ejs
        // Nếu bạn muốn hiện chữ thì dùng res.send('Nguyen Thanh Huy')
        return res.send('Nguyen Thanh Huy'); 
    });

    router.get('/home', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    
    // SỬA DÒNG NÀY (Thay displayGetCRUD thành getFindAllCrud)
    router.get('/get-crud', homeController.getFindAllCrud); 
    
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    return app.use('/', router);
}

// Vì bạn đang dùng Babel (import), nên dùng export default cho đồng bộ
export default initWebRoutes;
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Chỉ cần gọi dotenv.config() mà không cần phải gán hoặc truy cập thuộc tính nào
dotenv.config();

const connect = async () => {
    try {
        // Truy cập trực tiếp biến môi trường đã được tải
        const url = process.env.DB_URL;
        await mongoose.connect(url);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        // In ra lỗi cụ thể để dễ dàng gỡ lỗi hơn
        console.log('Cannot access MongoDB:', error.message);
    }
}

export default connect;

import React from 'react';
interface INotificationBody {
    className?: string;
    [others: string]: any;
}
declare const NotificationBody: React.FC<INotificationBody>;
export default NotificationBody;

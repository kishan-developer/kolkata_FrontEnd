import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface Notification {
  id?: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
  timestamp?: string;
  [key: string]: any;
}

const useSocket = (userId?: string, role?: string, department?: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io(process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001", {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    socketInstance.on("connect", () => {
      console.log("Connected to Socket.io server");
      setIsConnected(true);

      // Join user-specific room
      if (userId) {
        socketInstance.emit("join", userId);
      }

      // Join role-specific room
      if (role) {
        socketInstance.emit("joinRole", role);
      }

      // Join department-specific room
      if (department) {
        socketInstance.emit("joinDepartment", department);
      }
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected from Socket.io server");
      setIsConnected(false);
    });

    // Listen for notifications
    socketInstance.on("notification", (notification: Notification) => {
      console.log("Received notification:", notification);
      setNotifications((prev) => [notification, ...prev].slice(0, 50)); // Keep last 50
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [userId, role, department]);

  return {
    socket,
    notifications,
    isConnected,
    clearNotifications: () => setNotifications([]),
  };
};

export default useSocket;

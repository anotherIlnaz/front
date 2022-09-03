import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { loginService } from "../loginService";

export const socket = io("http://localhost:5000");


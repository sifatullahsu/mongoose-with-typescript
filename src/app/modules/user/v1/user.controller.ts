import { NextFunction, Request, Response } from "express";
import { createUserDB, deleteUserDB, getUserDB, getUsersDB, updateUserDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await createUserDB(req.body);

    res.status(400).json({
      status: true,
      message: 'user created successfull.',
      _id: result
    });
  }
  catch (error) {
    res.status(400).json({
      status: false,
      message: 'somtething is wrong.',
      error: error
    });
  }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getUsersDB();

    res.status(400).json({
      status: true,
      data: result
    });
  }
  catch (error) {
    res.status(400).json({
      status: false,
      message: 'somtething is wrong.',
      error: error
    });
  }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getUserDB(req.params.id);

    res.status(400).json({
      status: true,
      data: result
    });
  }
  catch (error) {
    res.status(400).json({
      status: false,
      message: 'somtething is wrong.',
      error: error
    });
  }

}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updateUserDB(req.params.id, req.body);

    res.status(400).json({
      status: true,
      message: "user update successfull.",
      _id: result
    });
  }
  catch (error) {
    res.status(400).json({
      status: false,
      message: 'somtething is wrong.',
      error: error
    });
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deleteUserDB(req.params.id);

    res.status(400).json({
      status: true,
      message: "user delete successfull.",
      _id: result
    });
  }
  catch (error) {
    res.status(400).json({
      status: false,
      message: 'somtething is wrong.',
      error: error
    });
  }
}
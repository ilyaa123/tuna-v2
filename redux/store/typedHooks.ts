import { Dispatch } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppState } from '../'

export const useAppDispatch: () => Dispatch<AppDispatch> = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
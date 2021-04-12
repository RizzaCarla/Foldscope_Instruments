import axios from 'axios';

export const fetchStudent = () => {
  return axios.get(`https://randomuser.me/api/`)
}

export const fetchStudents = () => {
  return axios.get(`https://randomuser.me/api/?results=8`)
}
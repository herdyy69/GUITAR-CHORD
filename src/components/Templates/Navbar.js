/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable unused-imports/no-unused-imports */
import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'

import { FiLogOut, FiArrowRight } from 'react-icons/fi'
import { RxTextAlignJustify, RxCross2 } from 'react-icons/rx'
import { FaUserCircle } from 'react-icons/fa'

import { useAuth } from '@/hooks/auth'

const Navbar = ({ users }) => {
  const router = useRouter()
  const { logout } = useAuth()

  console.log(users)

  return (
    <>
      <div className="navbar flex-col md:flex-row items-center justify-center border-b-2 border-x-2 mx-auto rounded-b-md px-[2rem] py-[2rem] md:py-[0rem]">
        <div className="flex flex-row justify-center md:justify-start gap-3 items-center w-full mt-10 md:mt-0">
          <span onClick={() => router.push('/')} className="nav-subtitle">
            BERANDA
          </span>
          <span className="nav-subtitle">TENTANG KAMI</span>
        </div>
        {users && (
          <span className="flex flex-row justify-end items-center w-full">
            <div className="flex flex-row mr-2 bg-white p-[0.3rem] rounded-md">
              <FaUserCircle className="text-[#2f414f] text-2xl" />
              <span className="profile ml-1">Halo, {users?.name}</span>
            </div>
            <FiLogOut
              onClick={() => logout()}
              className="text-[#fff] text-3xl cursor-pointer bg-[#ED1A23] rounded-full p-1"
            />
          </span>
        )}
      </div>
    </>
  )
}

export default Navbar

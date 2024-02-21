import { InfoModalProps } from "@/typescript/interfaces"
import Link from "next/link"
import React from "react"
import { LiaGetPocket } from "react-icons/lia"

const InfoModal: React.FC<InfoModalProps> = ({
  type,
  title,
  subtitle,
  closeModal,
  confirmAction,
}) => {
  return (
    <div id="contact-modal">
      <div
        className="relative z-20"
        aria-labelledby="contact-modal"
        role="dialog"
        aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-600 sm:mx-0 sm:h-10 sm:w-10">
                    <LiaGetPocket color="white" size={30} />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title">
                      {title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                {type != "delete-product" && (
                  <Link
                    href="/"
                    className="inline-flex w-full justify-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 sm:w-auto">
                    Početna
                  </Link>
                )}
                {type == "delete-product" && (
                  <button
                    type="button"
                    onClick={confirmAction}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm border border-amber-500 hover:bg-amber-600 sm:mt-0 sm:w-auto">
                    Da
                  </button>
                )}
                {type != "update-product" && (
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm border border-amber-500 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                    {type == "delete-product" ? "Ne" : "Zatvori"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal

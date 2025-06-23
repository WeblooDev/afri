'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'
import Image from 'next/image'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const formMethods = useForm({ defaultValues: formFromProps.fields })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        loadingTimerID = setTimeout(() => setIsLoading(true), 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()
          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)
            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })
            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect?.url) {
            router.push(redirect.url)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({ message: 'Something went wrong.' })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <div className="container mt-[100px] flex flex-col md:flex-row items-center gap-6">
      <div className="flex flex-col gap-4 w-full md:w-[50%]">
        {!hasSubmitted && (
          <>
            <h1 className="text-3xl md:text-6xl font-semibold">Remplissez le formulaire</h1>
            {enableIntro && introContent && (
              <RichText className="mb-8 lg:mb-12" data={introContent} enableGutter={false} />
            )}
          </>
        )}

        <FormProvider {...formMethods}>
          {!isLoading && hasSubmitted && confirmationType === 'message' && (
            <>
              <div className="flex flex-col justify-center items-center text-center">
                <RichText data={confirmationMessage} className="text-3xl text-black " />
                <Button
                  onClick={() => router.push('/')}
                  className="!mt-6 !bg-black !text-white !w-full !py-6 rounded-3xl text-xl"
                >
                  Retourner à la page d’accueil
                </Button>
              </div>
            </>
          )}

          {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
          {error && <div>{`${error.status || '500'}: ${error.message}`}</div>}

          {!hasSubmitted && (
            <form id={formID} onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 last:mb-0">
                {formFromProps?.fields?.map((field, index) => {
                  const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                  return Field ? (
                    <div className="flex flex-col gap-3 mb-6 last:mb-0" key={index}>
                      <Field
                        form={formFromProps}
                        {...field}
                        {...formMethods}
                        control={control}
                        errors={errors}
                        register={register}
                        className="!bg-white !border !border-black flex flex-col gap-3 mb-6 last:mb-0"
                      />
                    </div>
                  ) : null
                })}
              </div>

              <Button
                form={formID}
                type="submit"
                className="!bg-black !text-white !w-full !py-6 rounded-3xl text-xl"
              >
                {submitButtonLabel}
              </Button>
            </form>
          )}
        </FormProvider>

        {!hasSubmitted && (
          <p className="text-base">
            Pour toute demande d’information, de rendez-vous ou de consultation, veuillez nous
            contacter via le formulaire ou les coordonnées ci-dessus. Nous serons ravis de vous
            répondre !
          </p>
        )}
      </div>

      <div className="w-full md:w-[50%] !rounded-2xl">
        <Image
          src="/location.png"
          alt="Notre localisation"
          width={600}
          height={700}
          className="h-[400px] md:h-[700px] w-full object-cover !rounded-2xl"
        />
      </div>
    </div>
  )
}

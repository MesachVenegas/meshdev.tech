"use client";

import { useState, useTransition } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { zodResolver } from "@hookform/resolvers/zod";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContactSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendEmail } from "@/actions/sendEmail";
import { Textarea } from "@/components/ui/textarea";
import ConfirmMessage from "@/components/confirm-message";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

export default function ContactForm() {
	const [isSent, setIsSent] = useState<{ id: string; message: string }>();
	const [isError, setIsError] = useState<
		{ name: string; statusCode: number; message: string } | undefined
	>();
	const [openModal, setOpenModal] = useState(false);
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof ContactSchema>>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	function handleForm(data: z.infer<typeof ContactSchema>) {
		startTransition(async () => {
			SendEmail(data)
				.then((res) => {
					setIsSent(res);
					setOpenModal(true);
				})
				.catch((err) => {
					setOpenModal(true);
					setIsError(err);
				});
		});
	}

	return (
		<>
			<Form {...form}>
				<form
					className="flex flex-col gap-4 p-4"
					onSubmit={form.handleSubmit(handleForm)}>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="flex flex-col lg:flex-row w-full lg:items-center gap-x-6">
								<FormLabel className="w-28 font-semibold">Nombre</FormLabel>
								<div className="flex flex-col w-full">
									<FormControl>
										<Input
											autoFocus
											type="text"
											disabled={isPending}
											placeholder="Escriba su nombre"
											className={`input ${
												form.formState.errors.name
													? "input-error"
													: "input-info"
											}`}
											{...field}
										/>
									</FormControl>
									<FormMessage className="text-error" />
								</div>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex flex-col lg:flex-row w-full lg:items-center gap-x-6">
								<FormLabel className="w-28 font-semibold">Correo</FormLabel>
								<div className="flex flex-col w-full">
									<FormControl>
										<Input
											type="email"
											disabled={isPending}
											placeholder="example@example.com"
											className={`input ${
												form.formState.errors.email
													? "input-error"
													: "input-info"
											}`}
											{...field}
										/>
									</FormControl>
									<FormMessage className="text-error" />
								</div>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem className="flex flex-col lg:flex-row w-full lg:items-center gap-x-6">
								<FormLabel className="w-28 font-semibold">Asunto</FormLabel>
								<div className="flex flex-col w-full">
									<FormControl>
										<Input
											type="text"
											disabled={isPending}
											placeholder="información, sugerencia..."
											className={`input ${
												form.formState.errors.subject
													? "input-error"
													: "input-info"
											}`}
											{...field}
										/>
									</FormControl>
									<FormMessage className="text-error" />
								</div>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem className="flex flex-col lg:flex-row w-full lg:items-center gap-x-6">
								<FormLabel className="w-28 font-semibold">Mensaje</FormLabel>
								<div className="flex flex-col w-full">
									<FormControl>
										<Textarea
											rows={7}
											disabled={isPending}
											placeholder="escriba su mensaje o duda aquí..."
											className={`w-full rounded-md bg-base-100 ${form.formState.errors.message ? "input-error" : "input-info"}`}
											{...field}
										/>
									</FormControl>
									<FormMessage className="text-error" />
								</div>
							</FormItem>
						)}
					/>

					<button className="btn btn-primary btn-block " type="submit">
						{isPending ? (
							<ClipLoader
								color={"#000"}
								loading={isPending}
								aria-label="Enviando mensaje..."
								data-testId="loading"
								size={20}
							/>
						) : (
							<>
								{" "}
								Enviar{" "}
								<span>
									<FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6" />{" "}
								</span>
							</>
						)}
					</button>

					<Button
						variant="ghost"
						className="flex justify-center items-center self-center w-fit gap-2 font-bold text-sm italic underline hover:text-primary hover:bg-transparent py-3"
						onClick={() => form.reset()}>
						Limpiar Formulario
					</Button>
				</form>
			</Form>
			{isSent && <ConfirmMessage data={isSent} error={isError} />}
		</>
	);
}

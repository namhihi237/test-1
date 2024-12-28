'use client';

import React, { useState } from 'react';
import { PhoneOff, Brain, Focus, Dumbbell } from 'lucide-react';

const Card = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

const Button = ({
	children,
	className,
	...props
}: {
	children: React.ReactNode;
	className?: string;
	[key: string]: any;
}) => (
	<button className={`px-4 py-2 rounded-md ${className}`} {...props}>
		{children}
	</button>
);

const Input = ({
	className,
	...props
}: {
	className?: string;
	[key: string]: any;
}) => (
	<input
		className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
		{...props}
	/>
);

const LandingPage = () => {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setSubmitted(true);
		setEmail('');
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
						Workout Without Distractions
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 mb-8">
						Join the movement. Leave your phone behind. Transform your workout.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<Card className="p-6 text-center">
						<div className="flex justify-center mb-4">
							<Focus className="w-12 h-12 text-blue-600" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-black">
							Enhanced Focus
						</h3>
						<p className="text-gray-600">
							Experience your workout without digital interruptions
						</p>
					</Card>

					<Card className="p-6 text-center">
						<div className="flex justify-center mb-4">
							<Brain className="w-12 h-12 text-blue-600" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-black">
							Mental Clarity
						</h3>
						<p className="text-gray-600">
							Reduce overstimulation and find peace in movement
						</p>
					</Card>

					<Card className="p-6 text-center">
						<div className="flex justify-center mb-4">
							<Dumbbell className="w-12 h-12 text-blue-600" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-black">
							Better Results
						</h3>
						<p className="text-gray-600">
							Improve form and mind-muscle connection
						</p>
					</Card>
				</div>

				<div className="max-w-2xl mx-auto text-center">
					<div className="flex justify-center mb-8">
						<PhoneOff className="w-16 h-16 text-blue-600" />
					</div>
					<h2 className="text-3xl font-bold mb-6 text-black">
						Take the Pledge
					</h2>
					<p className="text-lg text-gray-600 mb-8">
						Join thousands who have committed to phone-free workouts. Get weekly
						tips and inspiration for maintaining focus in the gym.
					</p>

					<form onSubmit={handleSubmit} className="max-w-md mx-auto">
						<div className="flex flex-col md:flex-row gap-4">
							<Input
								type="email"
								value={email}
								onChange={(e: any) => setEmail(e.target.value)}
								placeholder="Enter your email"
								className="flex-grow"
								required
							/>
							<Button
								type="submit"
								className="bg-blue-600 hover:bg-blue-700 text-white"
							>
								Join Movement
							</Button>
						</div>
						{submitted && (
							<p className="text-green-600 mt-4">
								Thank you for joining! Check your email for next steps.
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;

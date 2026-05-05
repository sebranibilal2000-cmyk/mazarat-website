import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export function StarRating() {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mazarat_user_rating");
    if (saved) {
      setUserRating(Number(saved));
      setSubmitted(true);
    }
  }, []);

  const handleRate = (rating: number) => {
    if (submitted) return;
    setUserRating(rating);
    localStorage.setItem("mazarat_user_rating", String(rating));
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            onMouseEnter={() => !submitted && setHover(star)}
            onMouseLeave={() => !submitted && setHover(0)}
            disabled={submitted}
            className="focus:outline-none disabled:cursor-default transition-transform hover:scale-110"
            aria-label={`تقييم ${star} نجوم`}
          >
            <Star
              className={`h-9 w-9 transition-colors ${
                star <= (hover || userRating || 0)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
              }`}
            />
          </button>
        ))}
      </div>
      {submitted ? (
        <p className="text-green-600 font-semibold text-sm">
          شكراً لتقييمك! حصلت على {userRating} من 5 نجوم ⭐
        </p>
      ) : (
        <p className="text-muted-foreground text-sm">قيّم خدمتنا – انقر على النجوم</p>
      )}
    </div>
  );
}

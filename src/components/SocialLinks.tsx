export default function SocialLinks({ socials }) {
  const TwitterIcon = socials?.twitter ? (
    <a href={`https://twitter.com/${socials.twitter}`}>Twitter</a>
  ) : null;
  const InstagramIcon = socials?.instagram ? <div>Instagram</div> : null;
  return (
    <div className="flex justify-center space-x-6 md:order-2">
      {TwitterIcon}
      {InstagramIcon}
    </div>
  );
}

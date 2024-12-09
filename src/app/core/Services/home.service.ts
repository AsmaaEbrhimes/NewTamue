import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.pord';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    baseApi = environment.baseApi

  dataHome: any = [
    {
        "id": 1,
        "title": "580ml Frosted Plastic Portable Water Cup, Summer Sports Water Bottle For Outdoor Camping Picnic Travel",
        "salary": "£3.99",
        "video": "2bd1399ffc8d23eb40c28434ed8b67a70667d9d1.f30.mp4",
        "img1": "1713597465516-25dc485e186a4709b0e385837616cfda-goods.jpeg",
        "img2": "1713597470399-2394d50b7ad84c8aaceaf6457082fbc3-goods.jpeg",
        "img3": "1713597467276-92000fb755e64a2cad2fa23e5c4338b9-goods.jpeg"
    },
    {
        "id": 2,
        "title": "Festive Wireless Gaming Headphones: Cute Animal Design, LED Lights, SD Card Slot, Compatible with Mobile Devices, Suitable for Adults, and Great for Gaming, Travel, or as a Gift for Boyfriend or Girlfriend",
        "salary": "£4.83",
        "video": "9219799bfb1116216aa790337ab9fc1afa16b7c2.f30.mp4",
        "img1": "7ea9595f-4549-4f40-b598-452d32fe796c.jpg",
        "img2": "7cfdfa26-e25b-42d8-b346-276131d965bb.jpg",
        "img3": "887e6a25-aa38-4102-b71d-a2380d36c396.jpg"
    },
    {
        "id": 3,
        "title": "Elegant Creative Trendy Mesh Gradient Bow Tassel Hair Clips Decorative Hair Accessories For Holiday Party Girls Accessories, Ideal",
        "salary": "£0.98",
        "img1": "5c51251fbc43f9a30e82f521deadb181.jpg",
        "img2": "f65fee51328037136b595eb59b4dc789.jpg",
        "img3": "f15f16cd3f58a53befb4490c580cd36f.jpg"
    },
    {
        "id": 4,
        "title": "2pcs Elegant Solid Color Ribbon Bowknot Shaped Hair Clips Trendy Hair Decoration For Women And daily use Daily Wear",
        "salary": "£0.87",
        "img1": "e3664de6-38c0-4ccf-9759-b5807e27a600.jpg",
        "img2": "6ba092ab-5a1c-498b-99e4-afd5d3271f51.jpg",
        "img3": "84653ac1-fbc1-4cc2-ad36-592bd28e5d57.jpg",
    },
    {
        "id": 5,
        "title": "10pcs Assorted Mini Flower Shaped Hair Claw Clips, Cute Simple Style, Colorful Hair Styling Accessories For Women And Girls, Random Colors",
        "salary": "£2.17",
        "img1": "20ea0387-9ca6-480c-b34f-5a2d6fc2f607.jpg",
        "img2": "22f35246-3284-48af-8f97-e69230745604.jpg",
        "img3": "39da8bff-877b-4ecb-958e-6af644e05da3.jpg",
    },
    {
        "id": 6,
        "title": "1pc Girl's Cool Flower Butterfly Rhinestone Faux Pearl Tassel High-quality Large Hair Clip, Zinc Alloy Fairy Girl's Hair Accessories, Ideal choice for Gifts",
        "salary": "£2.98",
        "img1": "b309d364a043861ce4c763603b8bf099.jpg",
        "img2": "b9354cd23bf9ea1235b2c20ddfd42709.jpg",
        "img3": "321d8e8479857049d502b2cf648eaf14.jpg",
    },
    {
        "id": 7,
        "title": "1pc, Elegant Retro Premium Versatile Solid Color Silky Bow Barrette, Women Girls Princess Style Casual Leisure Hair Accessories, Gift Photo Props",
        "salary": "£0.49",
        "video": "22a78c89131f8126012e5904b4b5eeefdb49dacc.f30.mp4",
        "img1": "457ce3b2-c381-4b1f-a6db-049bd2b910e3.jpg",
        "img2": "ab48b7d1-4144-4a51-995d-b65dc42e2f38.jpg",
        "img3": "ed7e57ea-6985-4a1e-b346-b61fd1eb225c.jpg"
    },
    {
        "id": 8,
        "title": "1pc, Elegant Premium Punk Y2K Butterfly Tassel Claw Clip, Women Girls Princess Style Casual Leisure Hair Accessories, Gift Photo Props",
        "salary": "£1.18",
        "video": "9f17b9f5d9e93036ab140d74b7ccab7016502b8a.f30.mp4",
        "img1": "27f59d6e-f810-40cb-84ae-40cdc889bd74.jpg",
        "img2": "bde76c2f-96b0-4128-991e-4521ef9f5c55.jpg",
        "img3": "b6bf72a6-2ac7-4f5d-91a8-13d99b54f03a.jpg"
    },
    {
        "id": 9,
        "title": "1pc Cute 2D Daisy Silicone Flower Shape Collapsible Expandable Multi Functional Mobile Phone Grip Stand Holder for Smartphone Tablet",
        "salary": "£0.88",
        "img1": "053c8606-08d6-4783-b49f-726adeeaf6ae.jpg",
        "img2": "a3563cc0-1d02-47f4-8a1b-5f0a80d87020.jpg",
        "img3": "63d2dcfc-5b7c-4252-af44-ef89eb21fb84.jpg"
    },
    {
        "id": 10,
        "title": "Moissanite Inlaid Butterfly Ear Climber, No Piercing Ear Clip Ear Wrap, Sparkle Copper Zircon Ear Cuff, Elegant Luxury Style Wedding Jewelry",
        "salary": "£0.97",
        "video": "1bc952353496ab74675097322bfca3637ad551c5.f30.mp4",
        "img1": "1687954546808-a8e37b6f73be40878e84028bbbd320c3-goods.png",
        "img2": "7e8f5003130956d9d1dfb3a9cc516e7e.jpg",
        "img3": "74cd4fa2-825a-46e1-90be-dd76a7719e21.jpg"
    },
    {
        "id": 11,
        "title": "Fashion Chain Crossbody Bag, Women's Sequins Square Purse, Elegant Shoulder Bag With Pendant - Perfect for Carnival Mardi Gras Music Festival",
        "salary": "£5.89",
        "video": "33b4cb320d38a10c948746de2ddbc9f9614b2125.f30.mp4",
        "img1": "6763806a-7b17-4e54-964c-f79b5e818ea3 (1).jpg",
        "img2": "288f6a28-c788-42bc-9712-12026310e3a6.jpg",
        "img3": "41c58d2e-f4ae-4c43-8f67-5cc924af8554_800x800.jpeg"
    },
    {
        "id": 12,
        "title": "1pc, Amethyst Moon Crystal Prisms Suncatcher, Half Moon Shaped Window Hanging Pendant Glass Prisms Decor Wind Chime Rainbow Sun Catcher For Home Garden Porch",
        "salary": "£5.89",
        "video": "f089296d55c9bd63d5ae44a288fb4641ebf4cb7e.f30.mp4",
        "img1": "5d21ed73f6b60447611224638826fb60 (1).jpg",
        "img2": "904a2128-638d-4f2d-8d91-f69c98e51ed8 (1).jpg",
        "img3": "706a8970-780e-48a6-9911-5fc17da05976.jpg"
    },
    {
        "id": 13,
        "title": "1pc, Amethyst Moon Crystal Prisms Suncatcher, Half Moon Shaped Window Hanging Pendant Glass Prisms Decor Wind Chime Rainbow Sun Catcher For Home Garden Porch",
        "salary": "£3.97",
        "video": "2a9f69765d84ad998fffd9d8600ada891e927709.f30 (1).mp4",
        "img1": "16d5e0ae-f317-4167-92e7-82405688b5e2.webp",
        "img2": "0de2fa68-2d64-41e1-98ba-fcc9bb9909b7.webp",
        "img3": "5dbdfbff-fa76-4e34-94d5-d08b9586faa5.webp"
    },
    {
        "id": 14,
        "title": "1pc Elegant Cute Fabric Bow Tie Hair Clip with Sparkling Mermaid",
        "salary": "£0.74",
        "video": "1da603913b9da488098f17b88d03271575999964.f30.mp4",
        "img1": "23d626cd-0e46-4d5d-9eb4-da38ec36a57b.jpg",
        "img2": "a38abdc7-99b7-4369-8afc-f1b0e065b318.jpg",
        "img3": "e9761234-271d-4d0d-9824-05aa898d528c.jpg"
    },
    {
        "id": 15,
        "title": "1pc Elegant Cute Fabric Bow Tie Hair Clip with Sparkling Mermaid",
        "salary": "£0.74",
        "img1": "46bb390d9d2e7e0f7a01cf216f973bf0.webp",
        "img2": "dac5386caad26f6898b5455a55124486.webp",
        "img3": "e1c7210a54fa541b89553ec1b6b3188c.webp"
    },
    {
        "id": 16,
        "title": "",
        "salary": "£0.74",
        "img1": "1705736477016-eb53e88a6a5f47358bcd1dcaa5d0daeb-goods.jpeg",
        "img2": "1705736479242-73c3206b83e84148876181f764173ba6-goods.jpeg",
        "img3": "1705736476080-97564e869aa142ef805875de174abcf8-goods.jpeg"
    },
    {
        "id": 17,
        "title": "1pc Elegant Cute Fabric Bow Tie Hair Clip with Sparkling Mermaid",
        "salary": "£0.74",
        "video": "308b7a8edcad85c84d6650336273244270cf1b50.f30.mp4",
        "img1": "954a45f15a901903b7e427bdbfcf8971.jpg",
        "img2": "850d6d595ecb601143680fdff113ebf0.jpg",
        "img3": "38f97c9ea70f806b60b71a7d475288a0.jpg"
    },
    {
        "id": 18,
        "title": "Elegant Butterfly Tassel Rhinestone Claw Clips Hair Clips Decorative Hair Accessories Photography Props, Ideal choice for Gifts",
        "salary": "£0.74",
        "img1": "2f98f312-5147-4189-a5fa-0c01193df0dd.jpg",
        "img2": "023d9b7c-8ee4-49e2-a478-ba2b7906e7e2.jpg",
        "img3": "fcb5e00dbdb495c568ee540f0ab199f0.jpg"
    },
    {
        "id": 19,
        "title": "Elegant Butterfly Tassel Rhinestone Claw Clips Hair Clips Decorative Hair Accessories Photography Props, Ideal choice for Gifts",
        "salary": "£0.74",
        "video": "6f27a6db5cbc933ea90e5701ff17fdfe10de5669.f30.mp4",
        "img1": "c07dbebb91d6b3b0f6b711245c920134.jpg",
        "img2": "54fbd0b2cf5c80108b85a81fc80394b0.jpg",
        "img3": "fc47d351d9abd8ddd216c20f9369c565.jpg"
    },
    {
        "id": 20,
        "title": "Mini Fashion Women's Beaded Design Tote Bag, Lightweight Handbag For Banquet And Wedding Use(19.81cmx 18.8cm)",
        "salary": "£0.74",
        "img1": "6a4310d9-912f-4579-9d2e-1dfb0ca0d91a.jpg",
        "img2": "ad77d813-1c26-4d1f-8708-c55af4749ba7.jpg",
        "img3": "6e508271-230b-45ed-9ea7-4f21fd69e520.jpg"
    },
    {
        "id": 21,
        "title": "Mini Fashion Women's Beaded Design Tote Bag, Lightweight Handbag For Banquet And Wedding Use(19.81cmx 18.8cm)",
        "salary": "£0.74",
        "img1": "e29212452cea5f6edd61656e73051c95.jpg",
        "img2": "aed7bd50fad03fe4f41526855ce5c604.jpg",
        "img3": "1666057963090-8f5dd0f048c248818833822f527ae246-goods.jpeg"
    },
    {
        "id": 22,
        "title": "Mini Fashion Women's Beaded Design Tote Bag, Lightweight Handbag For Banquet And Wedding Use(19.81cmx 18.8cm)",
        "salary": "£0.74",
        "img1": "d9b6f6a11c047f341d8505ac516c2c7d.jpg",
        "img2": "2b226f2736fd0448a1376601a9d6ebf9.jpg",
        "img3": "1678439757374-6f3e7bcb986e408484f9a4081e9c0eb0-goods.jpeg"
    },
    {
        "id": 23,
        "title": "Luxury Heart Shaped Rhinestone Evening Bag - Dazzling Glitter Tassel, Compact Dinner Clutch Purse, Elegant Formal Banquet Handbag - Ideal for Wedding Party, Prom Night, Carnaval Music Festival",
        "salary": "£0.74",
        "img1": "5f69eb1787fd97843246b467b876ddab.jpg",
        "img2": "db9bcb0b44e20857bd6f4d8b7b5eeda2.jpg",
        "img3": "78416ea0-5cc0-4a6c-9e2e-93781562e459_1340x1785.jpeg.a.jpeg"
    },
    {
        "id": 24,
        "title": "Luxury Heart Shaped Rhinestone Evening Bag - Dazzling Glitter Tassel, Compact Dinner Clutch Purse, Elegant Formal Banquet Handbag - Ideal for Wedding Party, Prom Night, Carnaval Music Festival",
        "salary": "£0.74",
        "video": "b6fa60fcd423f6c8d0a89a8d7e20b207ba45eeb8.f30.mp4",
        "img1": "c680df2e36ea66f5812c2ca642f1aca9.jpg",
        "img2": "ea83a88e8db2bd5985474f8bad393f25.jpg",
        "img3": "98683247d12fad988d34a0f9f92109d5.jpg"
    },
    {
        "id": 25,
        "title": "Elegant Bridal Headband With Golden Leaves, Faux Pearls & Floral Crown - Perfect For Weddings And Special Occasions",
        "salary": "£1.77",
        "img1": "8d5c7664-9f4c-4bbc-a658-57a9351dc54c_1714014472.jpg",
        "img2": "890142da-328c-4ba1-b8ee-01f0b607aefc_1714014472.jpg",
        "img3": "4fe64788-4a1c-4573-8f40-bf6913f5dab6_1714014472.jpg"
    },
    {
        "id": 26,
        "title": "5 Pairs Of Teenager's Fashion Simple Pattern Low-cut Socks, Comfy Breathable Socks For All Seasons Wearing",
        "salary": "£1.39",
        "img1": "14f25c41-494b-4e55-a548-6f9cf100ebde.jpg",
        "img2": "ee8938ba12475aed7959ac74feeec655.jpg",
        "img3": "603f15d1-3c84-477e-b3f5-99a114ace1ee.jpg"
    },
    {
        "id": 27,
        "title": "5 Pairs Of Teenager's Fashion Simple Pattern Low-cut Socks, Comfy Breathable Socks For All Seasons Wearing",
        "salary": "£1.39",
        "img1": "cf05c56959e20655fb05df9e4aa5d994.jpg",
        "img2": "e5e02aefdecf9f73f00235b7b2fc2b47.jpg",
        "img3": "49c9bd002179bcbaeea11dc760958912.jpg"
    },
    {
        "id": 28,
        "title": "Vintage Beret Hat, Adjustable Unisex Cap, Retro Octagon Painter Hat",
        "salary": "£5.87",
        "img1": "c4a20821-d61f-4518-82db-e5f19b4d9305.jpg",
        "img2": "468738ca-70ce-4220-871d-a197c879559a.jpg",
        "img3": "b574b4ec-ddfc-432b-aa58-938b85aaa0d7.jpg"
    },
    {
        "id": 29,
        "title": "1pc Cute Double-sided Heart Plush Hair Clip, Exquisite Fluffy Claw Clip With Tassel Pendant, Girl's Hair Accessories",
        "salary": "£1.48",
        "video": "3ee3f423ee524b336a173e8f86beb917bdb0effd.f30.mp4",
        "img1": "f144fc0b7a8a5b0b231fbf243bc66edc.jpg",
        "img2": "1c820d91b77fc612f4b949c9dca7549f.jpg",
        "img3": "f144fc0b7a8a5b0b231fbf243bc66edc (1).jpg"
    },
    {
        "id": 30,
        "title": "1pc Cute Double-sided Heart Plush Hair Clip, Exquisite Fluffy Claw Clip With Tassel Pendant, Girl's Hair Accessories",
        "salary": "£1.48",
        "video": "b4959ba99507b42812e0edf6282d2a3ea2a05203.f30.mp4",
        "img1": "b49047e8-8307-4065-a6b9-4a93ec11cd0f.jpg",
        "img2": "41857d8e-f868-4bc5-b8c8-f43717e0ad29.jpg",
        "img3": "07890b06-d834-4fdd-a11a-cd29107ac8da.jpg"
    },
    {
        "id": 31,
        "title": "1pc/2/5pcs, Warm Versatile Sweet Heart Decor Hair Claw Clip, Women Girls Casual Leisure Hair Accessories For Winter, Valentine's Day Gift Photo Props",
        "salary": "£1.48",
        "video": "c8ebf22e97f8a4fa31b775b6ed419d4654975922.f30.mp4",
        "img1": "f9445ae1-3012-49af-8fef-d6914070b846.jpg",
        "img2": "c2cf5b94-1047-44e3-9bd4-7fd3890df71c.jpg",
        "img3": "4b09062b-770c-4a13-b28e-5771b625d0a2.jpg"
    },
    {
        "id": 32,
        "title": "Faux Pearl Yarn Bowknot Hair Claw Large Streamer Bowknot Shark Claw Long Ribbon Hair Accessories For Women",
        "salary": "£2.27",
        "img1": "e21a789626d03d8b1832e536004c9d70.jpg",
        "img2": "fb29967f830b4ac4e06791f1d56ac32a.jpg",
        "img3": "24f9176c6fc2b1764caa3ff0f4a4b868.jpg"
    },
    {
        "id": 33,
        "title": "Luxury Fashion Personalized Phone Charm with Created Pearl and Alloy Chain - Sparkling Rhinestone Wristlet Short Strap for Trendy",
        "salary": "£2.09",
        "img1": "1c29e875-8e7f-4429-bf1b-f2d72d32bac0.jpg",
        "img2": "e876e456-e59c-47c2-ad71-d908af1aa7a8.jpg",
        "img3": "44172905-b5be-4bc6-b3de-65d66a81352b.jpg"
    },
    {
        "id": 34,
        "title": "Floral Bracelet Chain Phone Case for Samsung Galaxy S23/S22/S21 Ultra Series - Shockproof TPU Cover with Hand Strap, 3D Flower",
        "salary": "£2.93",
        "img1": "f512822c-cd11-4191-9e1c-3542ba4dde28.jpg",
        "img2": "32399291-93a8-479b-87ca-3bde6c840924.jpg",
        "img3": "0cb8661a-4438-4df5-a2e6-427171c86b36.jpg"
    },
    {
        "id": 35,
        "title": "Hand-painted Heart Flower Bracelet Cream Pattern Case For Redmi Suitable For Note13pro Note13-4G Note11S Redmi NOTE12 PRO 5G",
        "salary": "£3.59",
        "img1": "b5506c9e-5090-4340-a3e8-de481acf128f.jpg",
        "img2": "0ddcd445-cf9e-48d7-8135-5fbeb1c157a2.jpg",
        "img3": "3c85eb9b-23cc-4a30-aee0-34f8c4929cd8.jpg"
    },
    {
        "id": 36,
        "title": "Electroplated Silvery Cartoon Bear Charger Protective Case",
        "salary": "£4.48",
        "img1": "da6da928-a8b6-4bee-9b59-f0e437db8b44.jpg",
        "img2": "02ab0499-be2c-4275-aecf-0ce7681a2341.jpg",
        "img3": "276cca7c-48b5-46af-acc1-c18997dbcb3a.jpg"
    },
    {
        "id": 37,
        "title": "Electroplated Silvery Cartoon Bear Charger Protective Case",
        "salary": "£4.48",
        "img1": "da6da928-a8b6-4bee-9b59-f0e437db8b44.jpg",
        "img2": "02ab0499-be2c-4275-aecf-0ce7681a2341.jpg",
        "img3": "276cca7c-48b5-46af-acc1-c18997dbcb3a.jpg"
    },
    {
        "id": 38,
        "title": "Women'S Spring Clip, Ideal For Ages 12-14, Perfect For Hairstyling &",
        "salary": "£0.78",
        "img1": "1714059820842-4fdd109cb8664ce7aab9cedf9fc96306-goods.jpeg",
        "img2": "1714059823915-a5283f4b933c4f77b154516f56dc832f-goods.jpeg",
        "img3": "1714059824294-eb348f9a5f0a4c95a75f2d7df4c67f7c-goods.jpeg"
    },
    {
        "id": 39,
        "title": "Chic Butterfly Ring Inlaid Shining Zirconia Silvery/ Pink/ Golden Make Your Call Match Daily Outfits Party Accessory",
        "salary": "£2.24",
        "img1": "b0689de6-f7df-4a96-bb1b-bd2c0410c0ce.jpg",
        "img2": "211d7527ed83c58438cc6465374225d9.jpg",
        "img3": "211d7527ed83c58438cc6465374225d9 (1).jpg"
    },
    {
        "id": 40,
        "title": "146pcs, Boho Balloon Garland Kit - White, Beige, Golden Balloons For Bridal Shower, Wedding, Engagement, Birthday Decorations And",
        "salary": "£5.99",
        "img1": "24f2c95d69d161511bdf10494ef5cdb6.jpg",
        "img2": "2ca8a5067306167c29271fccc684c4d2.jpg",
        "img3": "8e1d68183a02207c8e5f30baa631efcd.jpg"
    },
    {
        "id": 41,
        "title": "All-Season Charming Gift Basket Bag – Durable, Cute, & Perfect for Every Festive Occasion",
        "salary": "£1.83",
        "img1": "3c2ad0c0-8083-11ee-be16-0a580a682c59.jpg",
        "img2": "2c0ecc30ec35db84dfba9f8ea8f2e202.jpg",
        "img3": "3bdaca1c-8083-11ee-919a-0a580a682c59.jpg"
    },
    {
        "id": 42,
        "title": "126pcs Butterfly Themed Balloons Arch Garland Set, Purple Balloons Purple Balloons Purple Butterfly Foil Balloons, Suitable For Party",
        "salary": "£4.89",
        "img1": "b6da55f1-c50d-4236-9aba-042da9b6abb4.jpg",
        "img2": "b63ce2a2-3de2-4a8b-80ca-72e21a7558af.jpg",
        "img3": "c4879d8f-de6b-4f24-adf9-9eb6ba1ba703.jpg"
    },
    {
        "id": 43,
        "title": "2pcs Kids Summer Bucket Hat Straw Hat & Bag Set, Cute Flower Sunshade Sun Hat, Fisherman's Hat For Going Out, Ideal Gift Choice",
        "salary": "£3.77",
        "img1": "1709708360728-38fc17671a4c4b0ba53a6f7b1fcc8c7b-goods.jpeg",
        "img2": "1709708360301-aec62a0449bf42a7b7bd299faadfdf2d-goods.jpeg",
        "img3": "1709708367021-5c92df14261e47369c5d8d5cd0dfdd54-goods.jpeg"
    },
    {
        "id": 44,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "1715310956770-9c68062caa884ed7b9e9b99a06f0aa3f-goods.jpeg",
        "img2": "1715310957401-359e3bdc22324da8a21a01fed0844078-goods.jpeg",
        "img3": "1715310958838-4d726cce26424d878985631197dc5fae-goods.jpeg"
    },




    {
        "id": 45,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video": "08b108fa69ea96fa9f59448b1c096bb92a8e435e.f30.mp4",
        "img1": "1705762768421-4516bf618c8a4caa9845f118be717a9f-goods.jpeg",
        "img2": "1705762767955-de900aaa28534d4fbcf726dc263ffdc7-goods.jpeg",
        "img3": "1705762766844-4d4fd1dcc7a948b0a2d033d7a5f9952b-goods.jpeg"
    },
    {
        "id": 46,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video": "98e2a2dc28ab4c02d4f2271068d13a347d146c05.f30.mp4",
        "img1": "6943465c-1b95-4c57-889e-675c3175c76f.jpg",
        "img2": "0c48446b-c05b-4497-863c-68dab28b74ea.jpg",
        "img3": "57679ea9-6978-45f7-a2ce-0d774b544edf.jpg"
    },
    {
        "id": 47,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "d23764f8-05e1-4ebc-847e-b6187cbfddcd.jpg",
        "img2": "848a6032-f6a1-4b0f-9b2b-a439cbb3155e.jpg",
        "img3": "00d6c482db4034f49b26f80307cf7d29.jpg"
    },
    {
        "id": 48,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video": "ac62732973f71197cb347295d9a07c7fd27e4ec3.f30.mp4",
        "img1": "e7d35aa5fc136cbf223d78d4aa797da2.jpg",
        "img2": "b1554bf9a4e8cb748f5029f35fc111c6.jpg",
        "img3": "d067b06cbb185639ec70a57ff5f293fd.jpg"
    },

    {
        "id": 49,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "290a9ee6506edf8a6c237a0f82b77c35.jpg",
        "img2": "c510ddcbd0ff997c35bc81ea08927df5 (1).jpg",
        "img3": "97761a251a52d067aef0ce0c0f8c6ec7.jpg"
    },


    {
        "id": 50,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video": "171eff4844b1535b8029d9d649cbb1924e8e1ec2.f30.mp4",
        "img1": "5c70ded3-95eb-497f-b4a6-c7b0078d762f.jpg",
        "img2": "553202c0-7fc1-4b14-a6f8-d8a9d9e691b4.jpg",
        "img3": "ce035ee2-d977-4a12-9777-112b752fc345.jpg"
    },


    {
        "id": 51,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video": "e5c00d4a16c2b79e904c2d2dffe7a7a41f5f8177.f30.mp4",
        "img1": "99a3706ddb1b0a50496ee9b56bf342b4.jpg",
        "img2": "b7e7c3b410ee7cd359e7675695ef24ab.jpg",
        "img3": "3a7705c7da4dafc4229b413739079370.jpg"
    },

    {
        "id": 52,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video": "9a74cb64f21b7dd56c4e223089be387fc5f3cd37.f30.mp4",
        "img1": "1b8299f95941911c420be440d386b086.jpg",
        "img2": "800aa883d4687e3322f5dea9a48005e8.jpg",
        "img3": "8612037b8b4ae7b8e768bb83fcaee331.jpg"
    },

    {
        "id": 53,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video": "ef1bc8bf14df9cc0d1e8dbdb7f067426.jpg",
        "img1": "1724061662796-0b3c48e5ce3544ae8c4b82416ade828a-goods.webp",
        "img2": "1724061669596-de67223b2b96443c805c66ff673af00b-goods.webp",
        "img3": "1724061665621-ca68355e5c2445128fc45bd8a462b9f3-goods.webp"
    },

    {
        "id": 54,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "aa93114db267987b82d50212f65e3a2b.jpg",
        "img2": "0e80ecfbcae78eff2974b035aecfef94.jpg",
        "img3": "ef1bc8bf14df9cc0d1e8dbdb7f067426.jpg"
    },


    {
        "id": 55,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "a567f468-c1e9-4762-a7d8-1ff34fef5319 (1).webp",
        "img2": "ec29a5f3-b189-4833-bc8c-108aa60ffbb0.webp",
        "img3": "14d01795-cdc7-4e65-bcb3-38fb606f3569.webp"
    },


    {
        "id": 56,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "2a208a2f-1d10-4f0e-bed0-cc9c228511a0.webp",
        "img2": "1df17aad-622f-4304-b1ec-852b1953756f.webp",
        "img3": "b5760576-b069-4ab3-9f2a-b247b19234db.webp"
    },
    {
        "id": 57,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "video":"e16d9de5042128b023627c7be2e521cf69630ccf.f30.mp4",
        "img1": "856ed59b01b3f38170e4293d35285794.webp",
        "img2": "aa929e1c73648cb5fef7a4d034b02844.webp",
        "img3": "98474bfb33c0656658a8a374e57f04e2.webp"
    },
    {
        "id": 58,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "bbd60330-39ac-4776-a9f6-e58bfd47e4dd.webp",
        "img2": "aa929e1c73648cb5fef7a4d034b02844.webp",
        "img3": "e50ef811-0a18-4dcb-87e1-0d7e0901bb37.webp"
    },

    {
        "id": 59,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "4fdd8158-80fc-4ce5-9fae-54fd9e11d488.webp",
        "img2": "e7b188bc-c706-4741-af11-2aa6757f7089.webp",
        "img3": "4c7e9f77-d1ee-41f8-b76d-ad19ba17e29b.webp"
    },

    {
        "id": 60,
        "title": "1pc Daisy Design Transparent Plastic Gift Bags with Ribbon Bow - Portable Party Favors Bag for Weddings and Celebrations",
        "salary": "£1.41",
        "img1": "df4bda7d-1026-49e7-b77e-cee4b053bd78.webp",
        "img2": "d720d0eb-53cb-4955-ab64-fb4dc544264f.webp",
        "img3": "b63b7c93-df53-4a08-a5c1-815daca4f8c4.webp"
    },
];

  constructor(private http: HttpClient) { }

  AllDataHome(){
    return this.dataHome;
  }

  GetAllproduct(url:any){
      return this.http.get(`${this.baseApi}api/${url}`)
  }
  
}

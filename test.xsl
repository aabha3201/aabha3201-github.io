<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
           <title>Top 10 underrated places to travel to</title>

</head>
<body>
  <h1 style="text-align:center">April Travel Catalog</h1>
  <h2 style="text-align:center">Here are the Top 10 Underrated Travel Destinations for this month</h2>


  <table border="5">
    <tr bgcolor="#D5ECC2">
      <th style="text-align:left">Destination</th>
      <th style="text-align:left">Location</th>
      <th style="text-align:left">Nearby Airport</th>
      <th style="text-align:left">Review</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr bgcolor="#FFD3B4">
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="place"/></td>
      <td><xsl:value-of select="airport"/></td>
      <td><xsl:value-of select="review"/></td>

    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

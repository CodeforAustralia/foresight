<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gml="http://www.opengis.net/gml"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>FDR Polygon</Name>
    <UserStyle>
      <Name>FDR Polygon</Name>
      <Title>district fdr polygons</Title>
      <Abstract>district fdr polygons from cfa</Abstract>
      <FeatureTypeStyle>
        
        <Rule>
          <Title>Extreme</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>TLFDR90Per</ogc:PropertyName>
             <ogc:Literal>Extreme</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
             <Fill>
                <!-- Colors -->
                <CssParameter name="fill">#DE0005</CssParameter>
                <CssParameter name="fill-opacity">0.7</CssParameter>
             </Fill>     
          </PolygonSymbolizer>
        </Rule>
        
        <Rule>
          <Title>Severe</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>TLFDR90Per</ogc:PropertyName>
             <ogc:Literal>Severe</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
             <Fill>
                <!-- Colors -->
                <CssParameter name="fill">#FC9307</CssParameter>
                <CssParameter name="fill-opacity">0.7</CssParameter>
             </Fill>     
          </PolygonSymbolizer>
        </Rule>
        
        <Rule>
          <Title>Very High</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>TLFDR90Per</ogc:PropertyName>
             <ogc:Literal>Very High</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
             <Fill>
                <!-- Colors -->
                <CssParameter name="fill">#FAED0B</CssParameter>
                <CssParameter name="fill-opacity">0.7</CssParameter>
             </Fill>     
          </PolygonSymbolizer>
        </Rule>
        
        <Rule>
          <Title>High</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>TLFDR90Per</ogc:PropertyName>
             <ogc:Literal>High</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
             <Fill>
                <!-- Colors -->
                <CssParameter name="fill">#15A0E2</CssParameter>
                <CssParameter name="fill-opacity">0.7</CssParameter>
             </Fill>     
          </PolygonSymbolizer>
        </Rule>
        
        <Rule>
          <Title>Low-Moderate</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>TLFDR90Per</ogc:PropertyName>
             <ogc:Literal>Low-Moderate</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
             <Fill>
                <!-- Colors -->
                <CssParameter name="fill">#6AA603</CssParameter>
                <CssParameter name="fill-opacity">0.7</CssParameter>
             </Fill>     
          </PolygonSymbolizer>
        </Rule>
        
        <Rule>
          <Title>Boundary</Title>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke-width">0.2</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>
        
     </FeatureTypeStyle>
    </UserStyle>
    </NamedLayer>
</StyledLayerDescriptor>